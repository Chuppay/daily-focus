import React from "react";
import shallow from "enzyme"
import Body from ".";
import renderer from "react-test-renderer"

test("Renders body without crashing", () =>{
    shallow(<Body />)
})


