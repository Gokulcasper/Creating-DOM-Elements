function createAlertViaDom(Msg) {
  const alertId = document.getElementById("alertId");

  // Creating Elements
  const div = document.createElement("div");

  div.className = "alert";

  // div.textContent = "Successfully Updated !!";  (Or)
  // div.innerText = "Successfully Updated !!";
  // console.log(div);

  const textNode = document.createTextNode(Msg);
  div.append(textNode);
  console.log(div);

  alertId.prepend(div);
}
createAlertViaDom("Successfully Updated!!");
// createAlertViaDom("Successfully Updated 2!!");
