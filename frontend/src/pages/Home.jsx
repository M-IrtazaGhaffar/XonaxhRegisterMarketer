import React, { useEffect, useState } from "react";
import Logo from "../assets/Xonaxh.png";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  Button,
  Text,
  Box,
  Radio,
  Flex,
  RadioGroup,
  useToast,
  Stack,
  Spinner,
  Image,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function Home() {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const toast = useToast();

  const [Data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    father: "",
    age: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    mobile: "",
  });

  const [Loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleOther = (name, value) => {
    setData({ ...Data, [name]: value });
  };

  const [Splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);
  }, []);

  const fetchData = async () => {
    if (
      Data.fname ||
      Data.lname ||
      Data.age ||
      Data.city ||
      Data.father ||
      Data.country ||
      Data.email ||
      Data.gender ||
      Data.mobile ||
      Data.state !== ""
    ) {
      try {
        setLoading(true);
        const response = await axios.post(
          "https://xanoxhbackend.netlify.app/register",
          Data
        );
        if (response.status == 200) {
          setLoading(false);
          toast({
            title: "Account created.",
            description: "Welcome to Xonaxh ;)",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          setData({
            fname: "",
            lname: "",
            email: "",
            father: "",
            age: "",
            gender: "",
            country: "",
            state: "",
            city: "",
            mobile: "",
          });
        } else {
          toast({
            title: "Try later",
            description: "Some error occured!",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        toast({
          title: "Try later",
          description: "Some error occured!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } else
      toast({
        title: "Note",
        description: "Please fill all!",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
  };

  return (
    <div>
      {Splash ? (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          h="100vh"
          gap="3"
        >
          <Image src={Logo} w="200px" />
          <Text fontSize="xs">The Assurance of Quality</Text>
          <Spinner />
        </Flex>
      ) : (
        <div>
          <Header />
          <Flex alignItems="center" justifyContent="center">
            <Text
              borderRadius="md"
              p="2"
              position="relative"
              top="-15px"
              width="75%"
              fontSize="xl"
              bg="gray"
              textAlign="center"
              color="white"
            >
              Register
            </Text>
          </Flex>
          <FormControl
            isRequired
            w={`${isLargerThan800 ? "50%" : "90%"}`}
            my={`${isLargerThan800 ? "10" : ""}`}
            mx="auto"
          >
            <Text fontSize="2xl" my="5">
              Provide details below
              <Text color="red" fontSize="sm">
                (All fields are required)
              </Text>
            </Text>
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First name"
              name="fname"
              onChange={handleInput}
            />
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last name"
              name="lname"
              onChange={handleInput}
            />
            <FormLabel>Father name</FormLabel>
            <Input
              placeholder="Father name"
              name="father"
              onChange={handleInput}
            />
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="i.e., example@gmail.com"
              name="email"
              type="email"
              onChange={handleInput}
            />
            <FormLabel>Mobile Number</FormLabel>
            <NumberInput
              max={923999999999}
              min={923000000000}
              onChange={(value) => handleOther("mobile", value)}
            >
              <NumberInputField placeholder="i.e., 923xxxxxxxxx" />
            </NumberInput>
            <FormLabel>Age (must be 18+)</FormLabel>
            <NumberInput
              max={40}
              min={18}
              onChange={(value) => handleOther("age", value)}
            >
              <NumberInputField placeholder="Age (18-40)" />
            </NumberInput>
            <FormLabel>Gender</FormLabel>
            <RadioGroup onChange={(value) => handleOther("gender", value)}>
              <Stack direction="row">
                <Radio value="male" colorScheme="gray">
                  Male
                </Radio>
                <Radio value="female" colorScheme="gray">
                  Female
                </Radio>
              </Stack>
            </RadioGroup>
            <FormLabel>Country</FormLabel>
            <Select
              placeholder="Select country"
              name="country"
              onChange={handleInput}
            >
              <option value="Pakistan">Pakistan</option>
            </Select>
            <FormLabel>State name</FormLabel>
            <Select
              placeholder="Select State"
              name="state"
              onChange={handleInput}
            >
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
              <option value="KPK">KPK</option>
            </Select>
            <FormLabel>City name</FormLabel>
            <Input placeholder="City name" name="city" onChange={handleInput} />
            <Button h="50px" w="100px" mt={4} onClick={fetchData}>
              <Box>{Loading ? <Spinner /> : "Submit"}</Box>
            </Button>
          </FormControl>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
