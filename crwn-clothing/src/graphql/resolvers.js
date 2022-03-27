import { gql } from "@apollo/client";

export const typeDefs = gql`
   extend type Item {
      quantity: Int
   }
   extend type Mutation {
      ToggleCartHidden: Boolean!
      AddItemToCart(item: Item!): [Item]
   }
`;

const GET_CART_HIDDEN = gql`
   {
      cartHidden @client
   }
`;

export const resolvers = {
   Mutation: {
      toggleCartHidden: (_root, _args, { cache }, _info) => {
         const { cartHidden } = cache.readQueary({
            query: GET_CART_HIDDEN,
         });

         cache.writeQuery({
            query: GET_CART_HIDDEN,
            data: { cartHidden: !cartHidden },
         });

         return !cartHidden;
      },
   },
};
