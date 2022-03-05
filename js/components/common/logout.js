export default function logoutUser() {

  const logout = document.querySelector(".menu button");

  if (logout === null) {
    console.log('User is not logged in');
  }
  else {
  logout.onclick = function () {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }
 }
}