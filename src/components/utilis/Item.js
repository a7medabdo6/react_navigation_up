import React from "react";
import { List, Icon } from "semantic-ui-react";

function Item({ color, text, number }) {
  return (
    <List.Item className="m-5">
      <List bulleted horizontal link>
        <List.Item style={{ color: `${color}` }} className="number">
          {number}
        </List.Item>
        <List.Item>
          <div>{text}</div>
        </List.Item>

        <List.Item>
          <div>
            <Icon name="chevron down" />
          </div>
        </List.Item>
      </List>
    </List.Item>
  );
}

export default Item;
