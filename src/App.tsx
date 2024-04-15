import { useEffect, useState } from 'react';
import './App.css'
import { Button, Divider, Flex, Input, Modal, Typography, notification } from 'antd'
import axios from 'axios';

const { Text, Title } = Typography;

function App() {

  const [callId, setCallId] = useState(location?.search?.replace("?", "").split("=")[1]);

  const [fields, setFields]: any = useState({ firstname: "", lastname: "", email: "", feedback: "", rating: "" });

  const [showAddFieldModal, setShowAddFieldModal] = useState(false);

  const [newFieldName, setNewFieldName]: any = useState("");

  const [apiUrl, setAPIUrl]: any = useState("");

  const [lastFocusField, setLastFocusField] = useState("");

  const callAPIOnMouseEnter = async (fieldName: string) => {
    try {

      notification.success({
        message: `API called for field : ${fieldName}`
      });

      const res = await axios({
        method: "POST",
        url: apiUrl,
        data: {
          type: "fieldwise",
          fieldName,
          callId
        }
      });

      console.log(`response of api call : ${apiUrl} is : `, res);

    } catch (error) {

    }
  }

  const sendAllData = async () => {
    try {

      const res = await axios({
        method: "POST",
        url: apiUrl,
        data: {
          type: "allFields",
          fields,
          callId
        }
      });

      if (res?.data) {
        console.log("response for sending all data : ", res?.data);
      }

    } catch (error) {

    }
  }

  useEffect(() => {
    try {
      const au = localStorage && localStorage.getItem("au");
      console.log("apiurl : ", au);
      if (au) {
        setAPIUrl(au);
      }

    } catch (error) {

    }
  }, []);

  return (
    <>

      <Modal open={showAddFieldModal}
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

      </Modal>

      <Flex vertical style={{ padding: 20, position: "fixed", top: 0, bottom: 0, left: "20%", right: "20%" }}>


        <Flex justify="space-between">
          <Title level={2}>API Details</Title>
          <Button onClick={() => {
            if (!apiUrl) notification.error({ message: "API yrl to dalo" });
            localStorage && localStorage.setItem("au", apiUrl);
          }} style={{ width: "20%" }} type='primary'>Save</Button>
        </Flex>

        <Flex vertical style={{}}>

          <Flex vertical style={{ marginBottom: 10 }}>
            <Text>API URL</Text>
            <Input
              value={apiUrl}
              placeholder='API URL'
              onChange={(e) => {
                setAPIUrl(e.target.value)
              }}
            />

            <br />

          </Flex>

        </Flex>

        <Divider></Divider>

        <Flex justify="space-between">
          <Title level={2}> Fields </Title>
          <Button style={{ width: "20%" }} type='primary' onClick={() => setShowAddFieldModal(true)}>Add Field + </Button>
        </Flex>


        <Flex vertical style={{}}>

          <Flex vertical style={{ marginBottom: 10 }}>
            <Text>Call Id</Text>
            <Input
              value={callId}
              placeholder='Call Id'
              onChange={(e) => setCallId(e.target.value)}
            />

            <br />

          </Flex>

        </Flex>

        <Flex style={{}} vertical>

          {
            Object.keys(fields)?.map((field: any) => {
              return (
                <>

                  <Flex vertical style={{ marginBottom: 10 }}>
                    <Text>{field}</Text>
                    <Input
                      value={fields[field]}
                      placeholder={field}
                      onFocus={() => {
                        if (lastFocusField !== field) {
                          callAPIOnMouseEnter(field);
                          setLastFocusField(field);
                        }
                      }}
                      onChange={(e) => {
                        setFields((prev: any) => {
                          return { ...prev, [field]: e.target.value }
                        })
                      }}
                    />
                  </Flex>

                </>
              );
            })
          }

        </Flex>

        <br />

        <Button onClick={() => {
          sendAllData();
          setLastFocusField("");
        }} style={{ background: "orange" }}>Submit</Button>

      </Flex>

    </>
  )
}

export default App
