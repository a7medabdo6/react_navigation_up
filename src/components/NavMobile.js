import React, { useEffect, useState, useRef } from "react";
import { List, Icon } from "semantic-ui-react";
import Item from "./utilis/Item";

export default function Nav() {
  var myRef = useRef();
  var myRef2 = useRef();

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const onDownArrowClick = () => {
    setDisplay(true);
  };
  const executeScroll = (ref) => scrollToRef(ref);
  const [Display, setDisplay] = useState(true);
  return (
    <nav>
      <List
        bulleted
        horizontal
        link
        style={{ display: `${Display ? "flex" : "none"}` }}
      >
        <List.Item style={{ width: "80%" }}>
          <List
            bulleted
            horizontal
            link
            className="scroll"
            style={{
              overflowX: "scroll",
              justifyContent: "unset",
              scrollbarWidth: "thin",
              scrollbarHeight: "thin",
            }}
          >
            <List.Item className="p-5 mobile_number" style={{ color: "red" }}>
              01
            </List.Item>
            <List.Item
              className="p-5 mobile_number"
              style={{ color: "yellow" }}
            >
              02
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "blue" }}>
              {" "}
              03
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "green" }}>
              04
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "pink" }}>
              05
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "pink" }}>
              05
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "pink" }}>
              05
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "pink" }}>
              05
            </List.Item>
            <List.Item className="p-5 mobile_number" style={{ color: "pink" }}>
              05
            </List.Item>
          </List>
        </List.Item>
        <List.Item>
          <div onClick={() => setDisplay(false)} className="chevron_arrow">
            <Icon name="chevron up" />
          </div>
        </List.Item>
      </List>
      <div
        className="main_content"
        style={{
          display: `${Display ? "none" : "block"}`,
        }}
      >
        <div
          onClick={() => onDownArrowClick()}
          className="chevron_arrow down_arrow"
        >
          <Icon name="chevron down" />
        </div>
        <div
          onClick={() => executeScroll(myRef)}
          className="chevron_arrow down_arrow right"
        >
          <Icon name="arrow  up" />
        </div>
        <List
          className="mt-10 mb-10"
          style={{ overflowY: "scroll", maxHeight: "500px" }}
        >
          <div ref={myRef}></div>

          <Item color="red" number="01" text="The Founders" />
          <Item color="yellow" number="02" text="The Founders" />
          <Item color="blue" number="03" text="The Founders" />
          <Item color="green" number="04" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <Item color="pink" number="05" text="The Founders" />
          <div ref={myRef2}></div>
        </List>
        <div
          onClick={() => executeScroll(myRef2)}
          className="chevron_arrow down_arrow right arrow_down"
        >
          <Icon name="arrow  down" />
        </div>
      </div>
    </nav>
  );
}
