import { NextPageContext } from 'next';
import axios from 'axios';
import SectionCard from './sectionCard';
import styled from 'styled-components';
import { Anchor, Box, Pagination } from 'grommet';
import Link from 'next/link';

interface SingleAPIPayload {
  projectTitle: string,
  projectDescription: string,
  projectCreator: string,
}

interface SectionMarqueeProps {
  APIPayload: SingleAPIPayload[],
  linkCaption: string,
  linkHref: string,
}

const SectionMarquee = function SectionMarqueeComponent<SectionMarqueeProps>({ APIPayload, linkCaption, linkHref }) {
  /**
  * first 4 JSON payload from our API
  */
  const handlePageChange = () => {
    console.log("Changed page numbers!");
  }

  let numberOfPages = 40;

  return (
    <>
      <Box>
        <Box
          align="end"
          gap="small"
          margin={{
            bottom: "small",
            right: "large"
          }}
        >
          <Pagination onChange={handlePageChange} numberItems={numberOfPages} />
        </Box>
        <Box
          margin={{
            left: "large",
            right: "large"
          }}
          gap="medium"
          direction="row"
        >
          {APIPayload.map(({
            projectTitle,
            projectDescription,
            projectCreator,
          }, i) => {
            return (
              < SectionCard key={i} projectTitle={projectTitle} projectDescription={projectDescription} projectCreator={projectCreator} />
            )
          })}
        </Box>
        <Box direction="row" justify="end" margin={{
          top: "medium",
          right: "large"
        }}>
          <Link href={linkHref}>
            <Anchor
              href={linkHref}
              label={linkCaption}
            />
          </Link>
        </Box>
      </Box>
    </>
  );
}

SectionMarquee.getInitialProps = async ({ req }: NextPageContext) => {
  return {

  };
};

export default SectionMarquee;