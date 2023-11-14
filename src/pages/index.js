import { Get, Post, Search } from "../../api/ProductService";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Image,
  Input,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  //property states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    Get().then((result) => {
      setProducts(result);
    });
  };
  return (
    <>
      <Box margin={10}>
        <Heading>
          <Flex>
            <Text>Product List</Text>
            <Spacer></Spacer>
            <Box marginTop={-2} marginRight={3}>
              <Input
                placeholder="Enter search key"
                onChange={(e) => {
                  Search(e.target.value).then((result) => {
                    setProducts(result);
                  });
                }}
              ></Input>
            </Box>
            <Button
              colorScheme="blue"
              onClick={() => {
                setShowAddModal(true);
              }}
            >
              Add New Product
            </Button>
          </Flex>
        </Heading>
        <TableContainer
          border="1px"
          borderColor="gray.200"
          boxShadow="sm"
          marginTop={5}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Td>Name</Td>
                <Td>Category</Td>
                <Td>Description</Td>
                <Td>Price</Td>
                <Td>Image</Td>
                <Td></Td>
              </Tr>
            </Thead>
            <Tbody>
              {products ? (
                <>
                  {products.map((product) => (
                    <Tr key={product.Id}>
                      <Td>{product.Id}</Td>
                      <Td>{product.Name}</Td>
                      <Td>{product.Category}</Td>
                      <Td>{product.Description}</Td>
                      <Td>{product.Price}</Td>
                      <Td>
                        <Image boxSize="50" src={product.Image}></Image>
                      </Td>
                      <Td>
                        <ButtonGroup>
                          <Button colorScheme="blue">Edit</Button>
                          <Button colorScheme="red">Delete</Button>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  ))}
                </>
              ) : (
                <>
                  <Text>No products available</Text>
                </>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        size="xl"
      >
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Stack>
              <FormControl isRequired={true}>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Enter product name"
                  onChange={(e) => setName(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Category</FormLabel>
                <Input
                  placeholder="Enter product category"
                  onChange={(e) => setCategory(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Description</FormLabel>
                <Input
                  placeholder="Enter product description"
                  onChange={(e) => setDescription(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Enter product price"
                  onChange={(e) => setPrice(e.target.value)}
                ></Input>
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Image Link</FormLabel>
                <Input
                  placeholder="Enter product image"
                  onChange={(e) => setImage(e.target.value)}
                ></Input>
              </FormControl>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ButtonGroup>
              <Button
                colorScheme="blue"
                onClick={() => {
                  const product = {
                    name: name,
                    category: category,
                    description: description,
                    price: price,
                    image: image,
                  };
                  Post(product).then(() => {
                    getProducts();
                    setShowAddModal(false);
                  });
                }}
              >
                Save
              </Button>
              <Button colorScheme="red" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
