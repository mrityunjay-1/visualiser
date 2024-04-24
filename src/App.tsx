import { useEffect, useState } from 'react';
import "./App.css";
import { Button, Flex, Input, Radio, Typography, message } from 'antd'
// import axios from 'axios';

const { Text, Title } = Typography;

function App() {

  const paramsRaw = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(paramsRaw.entries());

  // const [fields, setFields]: any = useState({ firstname: "", lastname: "", email: "", feedback: "", rating: "" });

  // const [showAddFieldModal, setShowAddFieldModal] = useState(false);

  // const [newFieldName, setNewFieldName]: any = useState("");

  // const [apiUrl, setAPIUrl]: any = useState("");

  // const [lastFocusField, setLastFocusField] = useState("");

  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q3Amount, setQ3Amount] = useState();
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");

  // const callAPIOnMouseEnter = async (fieldName: string) => {
  //   try {

  //   } catch (error) {

  //   }
  // }

  // const sendAllData = async () => {
  //   try {



  //   } catch (error) {

  //   }
  // }

  useEffect(() => {
    try {
      // const au = localStorage && localStorage.getItem("au");
      // console.log("apiurl : ", au);
      // if (au) {
      //   setAPIUrl(au);
      // }

    } catch (error) {

    }
  }, []);

  return (
    <>

      {/* <Modal open={showAddFieldModal}
        onCancel={() => setShowAddFieldModal(false)}
        onOk={() => {
          if (!newFieldName) {
            setNewFieldName("");
            return;
          }
          setFields((prev: any) => { return { ...prev, [newFieldName]: "" } })
          setNewFieldName("");
          setShowAddFieldModal(false);
        }}>

        <Flex vertical style={{ marginBottom: 10 }}>
          <Text>Field Name</Text>
          <Input
            value={newFieldName}
            placeholder='Field Name'
            onChange={(e) => setNewFieldName(e.target.value)}
          />
        </Flex>

      </Modal> */}

      <Flex vertical className='form-container'>

        <Flex style={{ zIndex: -1, position: "absolute", top: 0, left: 0, bottom: 0, right: 0, background: 'url("/lg_logo.png") no-repeat center', backgroundSize: "60%" }}><Text></Text></Flex>

        <Flex justify="space-between">
          <Title level={3}>Welcome to LG Visual IVR</Title>
        </Flex>

        <Flex>
          <Title style={{ color: "grey" }} level={5}>Please share your valuable feedback regarding recent repair of your LG {params?.productName ?? "NA"}</Title>
        </Flex>

        {/* Question 1 */}
        <Flex>

          <Text style={{ flex: 0.06 }}>1</Text>

          <Flex vertical style={{ flex: 0.94 }}>
            <Title level={5}>Your product has been repaired against request number {params?.reqNo ?? "NA"}</Title>

            <Radio.Group onChange={(e: any) => { setQ1(e.target.value) }} value={q1}>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
            </Radio.Group>

          </Flex>

        </Flex>

        {/* Question 2 */}
        <Flex>

          <Text style={{ flex: 0.06 }}>2</Text>

          <Flex vertical style={{ flex: 0.94 }}>
            <Title level={5}>Did engineer change any part during repair of the product?</Title>
            <Radio.Group onChange={(e: any) => { setQ2(e.target.value) }} value={q2}>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
              <Radio value={"notSure"}>Not Sure</Radio>
            </Radio.Group>
          </Flex>

        </Flex>

        {/* Question 3 */}
        <Flex>

          <Text style={{ flex: 0.06 }}>3</Text>

          <Flex vertical style={{ flex: 0.94 }}>

            <Title level={5}>Did you pay any charges for repair?</Title>
            <Radio.Group onChange={(e: any) => { setQ3(e.target.value) }} value={q3}>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
              <Radio value={"notSure"}>Not Sure</Radio>
            </Radio.Group>

            {
              q3 === "yes" ?
                <>
                  <br />

                  <Flex vertical>
                    <Text style={{ fontWeight: 500 }}>Please confirm how much amount you paid ?</Text>

                    <Flex align='center'>
                      <Text style={{ flex: 0.1 }}>Amount</Text>
                      <Input
                        value={q3Amount}
                        onChange={(e: any) => {
                          let val = e.target.value;

                          if (isNaN(+(val))) return message.warning("Please enter valid amount.");

                          setQ3Amount(val)
                        }}
                        style={{ flex: 0.2 }}
                        placeholder='0'
                      />
                    </Flex>

                  </Flex>

                </>
                :
                null
            }

          </Flex>


        </Flex>

        {/* Question 4 */}
        <Flex>
          <Text style={{ flex: 0.06 }}>4</Text>

          <Flex vertical style={{ flex: 0.94 }}>

            <Title level={5}>Did you pay any charges for purchase of AMC / D-Scale or any other Accessory during Repair?</Title>

            <Radio.Group onChange={(e: any) => { setQ4(e.target.value) }} value={q4}>
              <Radio value={"yes"}>Yes</Radio>
              <Radio value={"no"}>No</Radio>
              <Radio value={"notSure"}>Not Sure</Radio>
            </Radio.Group>

          </Flex>

        </Flex>

        {
          q3 === "yes" || q4 === "yes" ?
            <>

              {/* Question 5 */}
              <Flex>

                <Text style={{ flex: 0.06 }}>5</Text>

                <Flex vertical style={{ flex: 0.94 }}>

                  <Title level={5}>Did you get Bill / Invoice of payment ?</Title>

                  <Radio.Group onChange={(e: any) => { setQ5(e.target.value) }} value={q5}>
                    <Radio value={"yes"}>Yes</Radio>
                    <Radio value={"no"}>No</Radio>
                  </Radio.Group>

                </Flex>

              </Flex>

              {/* Question 6 */}
              <Flex>

                <Text style={{ flex: 0.06 }}>6</Text>

                <Flex vertical style={{ flex: 0.94 }}>

                  <Title level={5}>Please Confirm the type of Bill / Invoice Engineer provided to you</Title>

                  <Radio.Group onChange={(e: any) => { setQ6(e.target.value) }} value={q6}>
                    <Radio value={"digital"}>Digital</Radio>
                    <Radio value={"handWritten"}>Hand Written</Radio>
                  </Radio.Group>

                </Flex>

              </Flex>

            </>
            :
            null
        }

        <Flex>
          <Text style={{ flex: 0.06 }}> {q3 === "yes" || q4 === "yes" ? "7" : "5"}</Text>
          <Flex vertical style={{ flex: 0.94 }}>
            <Title level={5}>Remarks</Title>
            <Input.TextArea
              placeholder='Please enter remarks'
              rows={3}>
            </Input.TextArea>
          </Flex>
        </Flex>


        <Flex justify='flex-end' gap={20}>

          <Button size="large" onClick={() => {
            // sendAllData();
            // setLastFocusField("");
          }} style={{ padding: "0 3rem", background: "rgba(151, 29, 55, 1)", color: "white" }}>Submit</Button>

        </Flex>

      </Flex>

    </>
  )
}

export default App
