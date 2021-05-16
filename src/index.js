import range from "underscore/modules/range";

import "./echo.js";

const element = document.getElementById("load-status");

element.innerHTML = "✅ js is working " + range(1, 10).join(", ");
