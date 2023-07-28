import {Button, Container, ToastContainer} from "react-bootstrap";
import {Template} from "../components/common";
import {Link} from "react-router-dom";
import {RoutesEnum} from "../common/common";
import type {TemplateModel} from "../common/common";
import type {FC} from "react";



const LinkToEditor = () => {
    return (
        <Button variant={'outline-primary'} >
            <Link to={RoutesEnum.TEMPLATE_HUB} target={'_blank'} rel={'noopener noreferrer'}>
                Open editor
            </Link>
        </Button>
    )
}


// export const Home: FC<TemplateModel[]> = (templates) => {
export const Home = () => {
    return (
        <Container>
            {/*<ToastContainer>*/}
                {/*<Template templateName={'hehe'} children={<LinkToEditor/>}/>*/}
                {/*{templates.map((template, id) => {*/}
                {/*    return <Template key={id} templateName={template.templateName}/>*/}
                {/*})}*/}
                <LinkToEditor/>
            {/*</ToastContainer>*/}
        </Container>
    );
};
