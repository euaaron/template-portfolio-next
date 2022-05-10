import Link from "next/link";
import { Component } from "react";
import { TopBarStyle } from "./style";

interface TopBarProps {
  children: React.ReactNode;
}

export class TopBar extends Component<TopBarProps> {
  constructor(props: TopBarProps) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const pages = [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Projetos",
        url: "/projects",
      },
      {
        name: "Sobre",
        url: "/about",
      },
    ];
    return (
      <TopBarStyle>
        {children}
        <div>
          {pages.map((page) => (
            <Link href={page.url} key={page.name}>
              <a>{page.name}</a>
            </Link>
          ))}
        </div>
      </TopBarStyle>
    );
  }
}
