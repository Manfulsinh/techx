var rollV, nameV, genderV, addressV;

function readFom() {

  nameV = document.getElementById("post-content").value;
  console.log(nameV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + nameV)
    .set({
      name: nameV,
    });
  alert("Data Inserted");
  document.getElementById("post-content").value = "";
};


// Retrieve and display data from the "student" node


document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + nameV)
    .remove();
  alert("Data Deleted");
  document.getElementById("name").value = "";

};
