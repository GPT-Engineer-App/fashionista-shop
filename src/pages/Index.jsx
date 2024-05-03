import { Box, Flex, Text, VStack, Image, SimpleGrid, Container } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "Slim Fit Jeans", price: "$79.99", image: "/images/jeans.jpg" },
  { id: 2, name: "Basic T-Shirt", price: "$19.99", image: "/images/tshirt.jpg" },
  { id: 3, name: "Leather Jacket", price: "$199.99", image: "/images/placeholder.jpg" }, // Using placeholder image
  { id: 4, name: "Sneakers", price: "$129.99", image: "/images/sneakers.jpg" }
];

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex as="header" align="center" justify="space-between" p={4}>
        <Text fontSize="2xl" fontWeight="bold">FashionHub</Text>
        <FaShoppingCart size="24px" />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} py={5}>
        {products.map(product => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" m="auto" />
            <VStack>
              <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {product.name}
              </Text>
              <Text>{product.price}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;