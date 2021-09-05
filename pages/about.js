import * as React from 'react'
import Layout from "../components/layout";
import Box from "../components/box";
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";


const About = () => {
    return (
        <Layout pageTitle="about">
            <Box css={{
                fontSize: 44,
            }}>
                About
            </Box>
            <p>about page</p>


            <Box as='div' css={{ boxSizing: 'borderBox', border: '1px solid  ', borderRadius: 6, borderColor: '$gray400', width: '100%'}}>

                {/* Twitter */}
                <Box as='a' href='https://twitter.com/mike0x10' 
                css={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid',  borderWidth: 'thin', borderColor: '$gray300', padding: 10,
                '&:hover': {
                    backgroundColor: '$gray900',
                    color: '$black',
                    borderRadius: 6,
                  },
                }}>
                    <Box css={{ fontWeight: 400, fontSize: '$3', color: '$gray300'}}>
                    Twitter <ArrowTopRightIcon/>
                    </Box>

                    <Box css={{ fontWeight: 400, fontSize: '$3',  color: '$gray300' }}>
                    @mike0x10
                    </Box>
                </Box>

                {/* ETH address */}
                <Box as='a' href='https://etherscan.io/address/0xe556D8349586ad9E9b83723dd9acc2319537A9Fa' 
                css={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid',  borderWidth: 'thin', borderColor: '$gray400', padding: 10,
                '&:hover': {
                    backgroundColor: '$gray900',
                    color: '$black',
                    borderRadius: 6,
                  },
                }}>
                    <Box css={{ fontWeight: 400, fontSize: '$3', color: '$gray300'}}>
                    ETHEREUM ADDRESS <ArrowTopRightIcon/>
                    </Box>

                    <Box css={{ fontWeight: 400, fontSize: '$3',  color: '$gray300' }}>
                    0xe556D8...537A9Fa 
                    </Box>
                </Box>

        </Box>


        </Layout>
    )
}

export default About;