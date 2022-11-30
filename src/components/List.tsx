import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <div className="List-note">{person.note}</div>
        </li>
      );
    });
  };
  return <ul>{renderList()}</ul>;
};

export default List;
