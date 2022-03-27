const graphql = require("graphql");
const Item = require("./Models/Item.model");
const Collection = require("./Models/Collection.model");
const Section = require("./Models/Section.model");

const {
   GraphQLObjectType,
   GraphQLID,
   GraphQLString,
   GraphQLInt,
   GraphQLSchema,
   GraphQLNonNull,
   GraphQLList,
   GraphQLBoolean,
} = graphql;

const CollectionType = new GraphQLObjectType({
   name: "Collection",
   fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      routeName: { type: GraphQLString },
      items: {
         type: new GraphQLList(ItemType),
         resolve(parent, args) {
            return Item.find({ collectionId: parent.id });
         },
      },
   }),
});

const ItemType = new GraphQLObjectType({
   name: "Item",
   fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      price: { type: GraphQLInt },
      imageUrl: { type: GraphQLString },
      collection: {
         type: CollectionType,
         resolve(parent, args) {
            return Collection.findById(parent.collectionId);
         },
      },
   }),
});

const SectionType = new GraphQLObjectType({
   name: "Section",
   fields: () => ({
      id: { type: GraphQLID },
      imageUrl: { type: GraphQLString },
      linkUrl: { type: GraphQLString },
      title: { type: GraphQLString },
      size: { type: GraphQLBoolean },
   }),
});

const RootQuery = new GraphQLObjectType({
   name: "RootQueryType",
   fields: {
      collection: {
         type: new GraphQLList(CollectionType),
         resolve(parent, args) {
            return Collection.find({});
         },
      },
      items: {
         type: new GraphQLList(ItemType),
         resolve(parent, args) {
            return Item.find({});
         },
      },
      getCollectionByTitle: {
         type: CollectionType,
         args: { title: { type: GraphQLString } },
         resolve(parent, args) {
            return Collection.findOne({ title: args.title });
         },
      },
      section: {
         type: new GraphQLList(SectionType),
         resolve(parent, args) {
            return Section.find({});
         },
      },
   },
});

const Mutation = new GraphQLObjectType({
   name: "Mutation",
   fields: {
      addCollection: {
         type: CollectionType,
         args: {
            title: { type: new GraphQLNonNull(GraphQLString) },
            routeName: { type: new GraphQLNonNull(GraphQLString) },
         },
         resolve(parent, arg) {
            let collection = new Collection({
               title: arg.title,
               routeName: arg.routeName,
            });
            return collection.save();
         },
      },
      addItem: {
         type: ItemType,
         args: {
            name: { type: new GraphQLNonNull(GraphQLString) },
            imageUrl: { type: new GraphQLNonNull(GraphQLString) },
            price: { type: new GraphQLNonNull(GraphQLInt) },
            collectionId: { type: new GraphQLNonNull(GraphQLID) },
         },
         resolve(parent, arg) {
            let item = new Item({
               name: arg.name,
               imageUrl: arg.imageUrl,
               price: arg.price,
               collectionId: arg.collectionId,
            });
            return item.save();
         },
      },
      addSection: {
         type: SectionType,
         args: {
            title: { type: new GraphQLNonNull(GraphQLString) },
            imageUrl: { type: new GraphQLNonNull(GraphQLString) },
            linkUrl: { type: new GraphQLNonNull(GraphQLString) },
            size: { type: new GraphQLNonNull(GraphQLBoolean) },
         },
         resolve(parent, args) {
            let section = new Section({
               title: args.title,
               imageUrl: args.imageUrl,
               linkUrl: args.linkUrl,
               size: args.size,
            });
            return section.save();
         },
      },
   },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
