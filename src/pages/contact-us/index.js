import React from "react";
import {  List } from "../../components";
import Layout from "../../layout";
const ContactUs = () => {
    return (
        <Layout username="User 3">
            <h1>Contact Us page</h1>
            <List list={["Item 1", "Item 2"]}>
                <h1>4545564</h1>
                <p>fsdfs</p>
                <ul>
                    <li>fsdfds</li>
                </ul>
                <table>
                    <tr>
                        <td>fdsfs</td>
                    </tr>
                </table>
            </List>
        </Layout>
    )
}
export default ContactUs