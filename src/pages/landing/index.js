import Button from "components/buttons";
import Column from "components/column";
import Img from "components/img";
import Input from "components/input";
import Modal from "components/modal";
import Row from "components/row";
import Table from "components/table"
import Tag from "components/tag";
import Images from "constants/img.constant";
import AppLayout from "layouts/app";
import { useState } from "react";
import { GRADIENT2_POS, GRADIENT_POS, LAYOUT_ALIGN, HEAD_SIZE, BUTTON_WRAPPER, HEAD2_SIZE, MODAL_BUTTON_WRAPPER, TOOL_BUTTON } from "./styles/page.style";
import { useToast } from "components/notifications";

export default function LandingPage() {

    const { Head, Body, TD, TH, TR } = Table;
    const [amdFlag, setAmdFlag] = useState(false);
    const [glFlag, setGlFlag] = useState(false);

    const toast = useToast();

    const showMessage = () => {
        toast.open("Your opperation done !");
    }

    const changeAmdFlag = () => {
        setAmdFlag(!amdFlag);
    }

    const changeGlFlag = () => {
        setGlFlag(!glFlag);
    }

    return (
        <AppLayout style={LAYOUT_ALIGN}>
            <Img src={Images.Gradient} style={GRADIENT_POS} draggable={false} />
            <Img src={Images.Gradient2} style={GRADIENT2_POS} draggable={false} />
            <h1 style={HEAD_SIZE}>Lax Auto Click Bot</h1>
            <Table className="lax-table">
                <Head>
                    <TR>
                        <TH>Account</TH>
                        <TH>Battle</TH>
                        <TH>Side</TH>
                        <TH>Status</TH>
                        <TH>Action</TH>
                    </TR>
                </Head>
                <Body>
                    <TR>
                        <TD>Fame</TD>
                        <TD>#/battle=2aaaabaf00cb5co</TD>
                        <TD>
                            <Tag className="danger">RED</Tag>
                        </TD>
                        <TD>CLICKING</TD>
                        <TD>
                            <Row gap="1rem">
                                <Button style={TOOL_BUTTON} bg="active">Run</Button>
                                <Button style={TOOL_BUTTON} bg="danger">Pause</Button>
                            </Row>
                        </TD>
                    </TR>
                    <TR>
                        <TD>Fame</TD>
                        <TD>#/battle=2aaaabaf00cb5co</TD>
                        <TD>
                            <Tag className="primary">BLUE</Tag>
                        </TD>
                        <TD>CLICKING</TD>
                        <TD>
                            <Row gap="1rem">
                                <Button style={TOOL_BUTTON} bg="active">Run</Button>
                                <Button style={TOOL_BUTTON} bg="danger">Pause</Button>
                            </Row>
                        </TD>
                    </TR>
                    <TR>
                        <TD>Fame</TD>
                        <TD>#/battle=2aaaabaf00cb5co</TD>
                        <TD>
                            <Tag className="danger">RED</Tag>
                        </TD>
                        <TD>CLICKING</TD>
                        <TD>
                            <Row gap="1rem">
                                <Button style={TOOL_BUTTON} bg="active">Run</Button>
                                <Button style={TOOL_BUTTON} bg="danger">Pause</Button>
                            </Row>
                        </TD>
                    </TR>
                    <TR>
                        <TD>Fame</TD>
                        <TD>#/battle=2aaaabaf00cb5co</TD>
                        <TD>
                            <Tag className="danger">RED</Tag>
                        </TD>
                        <TD>CLICKING</TD>
                        <TD>
                            <Row gap="1rem">
                                <Button style={TOOL_BUTTON} bg="active">Run</Button>
                                <Button style={TOOL_BUTTON} bg="danger">Pause</Button>
                            </Row>
                        </TD>
                    </TR>
                    <TR>
                        <TD>Fame</TD>
                        <TD>#/battle=2aaaabaf00cb5co</TD>
                        <TD>
                            <Tag className="primary">BLUE</Tag>
                        </TD>
                        <TD>CLICKING</TD>
                        <TD>
                            <Row gap="1rem">
                                <Button style={TOOL_BUTTON} bg="active">Run</Button>
                                <Button style={TOOL_BUTTON} bg="danger">Pause</Button>
                            </Row>
                        </TD>
                    </TR>
                </Body>
            </Table>
            <Row style={BUTTON_WRAPPER} gap="1rem">
                <Button onClick={changeAmdFlag}>Add</Button>
                <Button bg="warning" onClick={changeGlFlag}>Glitch</Button>
            </Row>
            <Modal show={amdFlag} onClose={changeAmdFlag}>
                <Column gap="1rem" alignItems="center">
                    <h2 style={HEAD2_SIZE}>Add New Account</h2>
                    <Input type="text" placeholder="Enter account username" />
                    <Input type="password" placeholder="Enter account password" />
                    <Row justifyContent="center" gap="1rem" style={MODAL_BUTTON_WRAPPER}>
                        <Button bg="primary" onClick={showMessage}>Add</Button>
                        <Button bg="danger" onClick={changeAmdFlag}>Close</Button>
                    </Row>
                </Column>
            </Modal>
            <Modal show={glFlag} onClose={changeGlFlag}>
                <Column gap="1rem" alignItems="center">
                    <h2 style={HEAD2_SIZE}>Glitch Account</h2>
                    <Input type="text" placeholder="Enter account username" />
                    <Input type="password" placeholder="Enter account password" />
                    <Row justifyContent="center" gap="1rem" style={MODAL_BUTTON_WRAPPER}>
                        <Button bg="primary">Add</Button>
                        <Button bg="danger" onClick={changeGlFlag}>Close</Button>
                    </Row>
                </Column>
            </Modal>
        </AppLayout>
    )
}