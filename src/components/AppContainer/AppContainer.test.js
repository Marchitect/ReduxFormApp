// AppContainer.test.js
import React from "react"
import { AppContainer } from "./AppContainer.component"
import { render } from "@testing-library/react"

it("AppContainer renders correctly", () => {
  const appContainer = render(
      <AppContainer
        
      >
      </AppContainer>
    )
  expect(appContainer).toMatchSnapshot()
})