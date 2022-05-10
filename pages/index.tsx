import { ApolloClient, createHttpLink, gql, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

interface INode {
  id: string,
  name: string,
  diskUsage: number,
  homepageUrl: string,
  url: string,
  description: string,
  createdAt: string,
  updatedAt: string,
}

const Home: NextPage = ({ repositories }: any) => {
  const repos: INode[] = repositories;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ul>
          {repos.map((item: any) => (
            <li key={item.id}>
              <a href={`${item.url}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.description}>
          Para começar, dê uma olhada em <Link href="/about">pages/about.tsx</Link>
        </p>
      </main>
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const authLink = setContext((_, { headers }) => {
    return {
        headers: {
              ...headers,
              authorization: `Bearer ${process.env.GITHUB_API_TOKEN}` || "",
          }
      }
  })

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
              id,
              name,
              diskUsage,
              homepageUrl,
              url,
              description,
              createdAt,
              updatedAt,
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      repositories: await data.viewer.repositories.nodes,
    }
  }
}
