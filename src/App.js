import { Component } from "react";
import UserProfile from "./components/UserProfile";

import "./App.css";

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Harish Goyel",
    role: "Software Developer",
    company: "Lyca Tech",
  },
  {
    uniqueNo: 2,
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
    name: "Manish Raj K",
    role: "Software Developer",
    company: "Floyd",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Nisha Agarwal",
    role: "Software Developer",
    company: "Amazon",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Leon James",
    role: "Software Developer",
    company: "GeekyAnts",
  },
  {
    uniqueNo: 5,
    imageUrl:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    name: "Nishak Lenon",
    role: "Software Developer",
    company: "Ambedext",
  },
  {
    uniqueNo: 6,
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
    name: "Sabarish Yenoki",
    role: "Software Developer",
    company: "Geeks for Geeks",
  },
  {
    uniqueNo: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Manyak James",
    role: "Software Developer",
    company: "Haddosion PVT",
  },
  {
    uniqueNo: 8,
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg",
    name: "David Peter",
    role: "Software Developer",
    company: "Zoho",
  },
];

class App extends Component {
  state = {
    searchInput: "",
    usersDetailsList: initialUserDetailsList,
  };

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  deleteUser = (uniqueNo) => {
    const { usersDetailsList } = this.state;
    const filteredUsersData = usersDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    this.setState({
      usersDetailsList: filteredUsersData,
    });
  };

  render() {
    const { searchInput, usersDetailsList } = this.state;
    const searchResults = usersDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    );
    return (
      <div className="app-container">
        <h1 className="title">Employees List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
          className="input"
        />
        <ul className="list-container">
          {searchResults.map((eachUser) => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
