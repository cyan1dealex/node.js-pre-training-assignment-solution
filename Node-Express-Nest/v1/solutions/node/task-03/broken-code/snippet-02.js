const fs = require("fs");

function processUserData(userId, callback) {
  // Step 1: Read user file
  fs.readFile(`user-${userId}.json`, "utf8", (err, userData) => {
    if (err) {
      callback(err);
      return;
    }

    const user = JSON.parse(userData);

    // Step 2: Read user preferences
    fs.readFile(`preferences-${user.id}.json`, "utf8", (err, prefData) => {
      if (err) {
        callback(err);
        return;
      }

      const preferences = JSON.parse(prefData);

      // Step 3: Read user activity
      fs.readFile(`activity-${user.id}.json`, "utf8", (err, activityData) => {
        if (err) {
          callback(err);
          return;
        }

        const activity = JSON.parse(activityData);

        // Step 4: Combine data and write result
        const combinedData = {
          user,
          preferences,
          activity,
          processedAt: new Date(),
        };

        fs.writeFile(
          `processed-${userId}.json`,
          JSON.stringify(combinedData, null, 2),
          (err) => {
            if (err) {
              callback(err);
              return;
            }

            callback(null, combinedData);
          }
        );
      });
    });
  });
}

// Usage with issues
processUserData(123, (err, result) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Success:", result);
  }
});
