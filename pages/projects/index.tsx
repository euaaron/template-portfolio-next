import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import type { NextPage } from "next";
import Head from "next/head";
import { ProjectsContainer } from "../../styles/Projects.styles";

interface INode {
  id: string;
  name: string;
  diskUsage: number;
  homepageUrl: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const Projects: NextPage = ({ repositories }: any) => {
  const repos: INode[] = repositories;

  return (
    <ProjectsContainer>
      <Head>
        <title>Portfolio | Projects</title>
        <meta
          name="description"
          content="Lista de Projetos desenvolvidos por mim."
        />
      </Head>

      <main>
        <ul>
          {repos.map((item: any) => (
            <li key={item.id}>
              <a href={`${item.url}`}>{item.name}</a>
            </li>
          ))}
        </ul>
      </main>
    </ProjectsContainer>
  );
};

export default Projects;

export async function getStaticProps() {
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` || "",
      },
    };
  });

  const httpLink = createHttpLink({
    uri: process.env.GITHUB_API_URL || "",
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await apolloClient.query({
    query: gql`
      query getRepositories($last: Int = 100, $isFork: Boolean = false) {
        viewer {
          repositories(last: $last, isFork: $isFork) {
            nodes {
              id
              name
              diskUsage
              homepageUrl
              url
              description
              createdAt
              updatedAt
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      repositories: await data.viewer.repositories.nodes,
    },
  };
}
