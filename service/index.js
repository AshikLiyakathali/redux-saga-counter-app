export function GetDataFromServer(apiPath, reqMethod, formBody) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  if (!reqMethod && reqMethod !== "POST") {
    return fetch(apiPath, { method: "GET", headers: myHeaders });
  } else {
    if (formBody) {
      let fetchData = {
        method: "POST",
        body: JSON.stringify(formBody),
        headers: myHeaders
      };
      return fetch(apiPath, fetchData);
    }
  }
}

export function GetDataFromServerToPost(apiPath, reqMethod, formBody) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  if (formBody) {
    let fetchData = {
      method: "POST",
      body: formBody,
      headers: myHeaders
    };
    return fetch(apiPath, fetchData);
  }
}

export function deleteTodoAPI(formBody) {
  console.log("FORM BODY" + JSON.stringify(formBody));
  let myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  return fetch("http://18.222.167.189:5000/delete-project", {
    method: "DELETE",
    body: JSON.stringify(formBody),
    headers: myHeaders
  }).then(res => res.json());
}
