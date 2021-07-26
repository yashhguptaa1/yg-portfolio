import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';

const HomePage = () => {
  return (
    <HomePageStyled>
            <div className="typography">
                <h1>Hi, I am<span>YASH GUPTA</span></h1>
                <p>
                   A professional Coder
                </p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/yashhguptaa/" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/yashhguptaa1" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://leetcode.com/yashhguptaa1/" className="icon i-leetcode">
                        <CodeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid blue;
                    color: blue;
                }
            }

            .i-leetcode{
                &:hover{
                    border: 2px solid yellow;
                    color: yellow;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
