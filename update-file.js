const fs = require("fs");

const content = `This file updates daily to keep the streak alive!
Last updated: ${new Date().toISOString().split("T")[0]}`;

fs.writeFileSync("daily-update.txt", content);
