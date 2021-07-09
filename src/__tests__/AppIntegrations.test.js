import React from "react";

import { render, screen, toBeInTheDocument } from "@testing-library/react";

import api from "../api";

import App from '../App'

jest.mock("../api");

describe("get trails data through api call", () => {
  it("should render trails in app", async () => {
    api.getTrails.mockResolvedValue([
      {
        "createdAt": "2021-07-05T04:19:32.524Z",
        "name": "Trilha AWS",
        "description":
          "Os serviços na nuvem estão crescendo e são cada vez mais importantes para a maioria dos sistemas e aplicações. A Amazon é o principal provedor de serviços e a líder absoluta nessa área.",
        "image": "https://i.ibb.co/KqZ1gRR/amazon-AWS-1200.jpg",
        "id": "1",
        "grade": [
          { "createdAt": "2021-07-05T04:30:17.238Z", "id": "1", "trailId": "1" },
        ],
      },
      {
        "createdAt": "2021-07-05T09:27:40.870Z",
        "name": "Trilha JS",
        "description":
          "JavaScript é uma linguagem multi-paradigma, interpretada (compilada em tempo de execução) e dinamicamente tipada. Essa flexibilidade permite que seja usada de inúmeras formas, sendo ao mesmo tempo uma linguagem fácil de aprender e difícil de dominar. É atualmente a principal linguagem para programação client-side em navegadores web.",
        "image": "https://i.ibb.co/FnPvTq8/1-6ahb-Wjp-g9hqha-TDSJOL1-Q.png",
        "id": "2",
        "grade": [
          { "createdAt": "2021-07-05T10:50:35.641Z", "id": "2", "trailId": "2" },
        ],
      },
      {
        "createdAt": "2021-07-04T14:11:03.051Z",
        "name": "Trilha JAVA",
        "description":
          "A Trilha Java vai trazer o que há de novo no mercado relacionado a plataforma Java, desde o avanço da linguagem a soluções que englobam aplicações que executam na plataforma através de outras linguagens como Kotlin por exemplo.",
        "image": "https://i.ibb.co/yR36F22/e2d2f80e-java-logo.png",
        "id": "3",
        "grade": [
          { "createdAt": "2021-07-05T05:41:48.634Z", "id": "3", "trailId": "3" },
        ],
      },
    ]);

    render(<App />);

    expect(await screen.findByText("Trilha AWS")).toBeInTheDocument();

    expect(screen.getByTestId("trails-wrapper").children.length).toBe(3);
  });
});
