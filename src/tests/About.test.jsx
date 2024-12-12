import { test, expect } from "vitest";
import {render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router";
// Components
import About from "../components/about/About";
// Pages
import Index from "../pages/index"

// Notes: About must be rendered within a router at it uses 'useLocation' hook
// MemoryRouter -> Designed for testing / provides routing context

test("renders About component with correct elements", () => {
    render(
      // Ensure component behaves as if it is being rendered at this path
      <MemoryRouter initialEntries={["/about"]}>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveTextContent('Read More')
    expect(screen.getByText(/There are many variations of passages of Lorem Ipsum/i)).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "About us"
    );
})

test('renders Read More link', () => {
    render(
        <MemoryRouter initialEntries={["/about"]}>
            <About />
        </MemoryRouter>
    )
    const link = screen.getByRole('link', { name: /Read More/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', "/")
})

test('renders the about image with correct attributes', () => {
     render(
       <MemoryRouter initialEntries={["/about"]}>
         <About />
       </MemoryRouter>
    );
    const image = screen.getByRole('img')
    // use 'expectStringMatching' to get string value instead of complete path
    expect(image).toHaveAttribute('src', expect.stringMatching('about-img.jpg'))
    expect(image).toHaveAttribute("alt", "about section image");
    expect(image).toHaveAttribute("class", "about-img")
})

test("applies correct classname based on pathname", () => {
    // About route
  render(
      <MemoryRouter initialEntries={["/about"]}>
        <About />
      </MemoryRouter>
    )
    let element = screen.getByRole("region")
    expect(element).toHaveClass("about_section layout_padding");
    
    // Home page
    // rerender(
    //   <MemoryRouter initialEntries={["/"]}>
    //     <Routes>
    //       <Route path="/" element={<Index />} />
    //     </Routes>
    //   </MemoryRouter>
    // );
    
    // element = screen.getByRole("region")
    // console.log(element)
    // expect(element).toHaveClass("about_section layout_padding-bottom");
});