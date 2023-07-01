const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Admin {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Category {
        _id: ID
        name: String
    }

    