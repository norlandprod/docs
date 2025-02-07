/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents isn't react hooks */

import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const { mdxPath } = await props.params
  const  { metadata } = await importPage(mdxPath)
  return {
    title: metadata.title ? `${metadata.title} – NP Documentation` : "NP Documentation",
    description: metadata.description ? metadata.description : "The documentation for all of Norland Production's resources'"
  }
}

const Wrapper = useMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}