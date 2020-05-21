/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDiplomacy = /* GraphQL */ `
  query GetDiplomacy($id: ID!) {
    getDiplomacy(id: $id) {
      id
      name
      user {
        items {
          id
          username
          email
          membership
          dob
          phone
          gender
          address
          nationality
          identification
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriber {
        items {
          id
          name
          email
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listDiplomacys = /* GraphQL */ `
  query ListDiplomacys(
    $filter: ModelDiplomacyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiplomacys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        user {
          nextToken
        }
        subscriber {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      membership
      dob
      phone
      gender
      address
      nationality
      identification
      createdAt
      updatedAt
      diplomacy {
        id
        name
        user {
          nextToken
        }
        subscriber {
          nextToken
        }
      }
      education {
        items {
          id
          institution
          qualification
          duration
          createdAt
          updatedAt
        }
        nextToken
      }
      attachment {
        items {
          id
          title
          memberID
          subject
          attachment
          createdAt
          updatedAt
        }
        nextToken
      }
      certificate {
        items {
          id
          member
          memberID
          attachment
          createdAt
          updatedAt
        }
        nextToken
      }
      blog {
        items {
          id
          member
          memberID
          title
          subject
          content
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        membership
        dob
        phone
        gender
        address
        nationality
        identification
        createdAt
        updatedAt
        diplomacy {
          id
          name
        }
        education {
          nextToken
        }
        attachment {
          nextToken
        }
        certificate {
          nextToken
        }
        blog {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEducation = /* GraphQL */ `
  query GetEducation($id: ID!) {
    getEducation(id: $id) {
      id
      institution
      qualification
      duration
      createdAt
      updatedAt
      user {
        id
        username
        email
        membership
        dob
        phone
        gender
        address
        nationality
        identification
        createdAt
        updatedAt
        diplomacy {
          id
          name
        }
        education {
          nextToken
        }
        attachment {
          nextToken
        }
        certificate {
          nextToken
        }
        blog {
          nextToken
        }
      }
    }
  }
`;
export const listEducations = /* GraphQL */ `
  query ListEducations(
    $filter: ModelEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        institution
        qualification
        duration
        createdAt
        updatedAt
        user {
          id
          username
          email
          membership
          dob
          phone
          gender
          address
          nationality
          identification
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getSubscriber = /* GraphQL */ `
  query GetSubscriber($id: ID!) {
    getSubscriber(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
      diplomacy {
        id
        name
        user {
          nextToken
        }
        subscriber {
          nextToken
        }
      }
    }
  }
`;
export const listSubscribers = /* GraphQL */ `
  query ListSubscribers(
    $filter: ModelSubscriberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscribers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        createdAt
        updatedAt
        diplomacy {
          id
          name
        }
      }
      nextToken
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
      id
      title
      memberID
      subject
      attachment
      createdAt
      updatedAt
      user {
        id
        username
        email
        membership
        dob
        phone
        gender
        address
        nationality
        identification
        createdAt
        updatedAt
        diplomacy {
          id
          name
        }
        education {
          nextToken
        }
        attachment {
          nextToken
        }
        certificate {
          nextToken
        }
        blog {
          nextToken
        }
      }
    }
  }
`;
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        memberID
        subject
        attachment
        createdAt
        updatedAt
        user {
          id
          username
          email
          membership
          dob
          phone
          gender
          address
          nationality
          identification
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
      id
      member
      memberID
      attachment
      createdAt
      updatedAt
      user {
        id
        username
        email
        membership
        dob
        phone
        gender
        address
        nationality
        identification
        createdAt
        updatedAt
        diplomacy {
          id
          name
        }
        education {
          nextToken
        }
        attachment {
          nextToken
        }
        certificate {
          nextToken
        }
        blog {
          nextToken
        }
      }
    }
  }
`;
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member
        memberID
        attachment
        createdAt
        updatedAt
        user {
          id
          username
          email
          membership
          dob
          phone
          gender
          address
          nationality
          identification
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      member
      memberID
      title
      subject
      content
      createdAt
      updatedAt
      user {
        id
        username
        email
        membership
        dob
        phone
        gender
        address
        nationality
        identification
        createdAt
        updatedAt
        diplomacy {
          id
          name
        }
        education {
          nextToken
        }
        attachment {
          nextToken
        }
        certificate {
          nextToken
        }
        blog {
          nextToken
        }
      }
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member
        memberID
        title
        subject
        content
        createdAt
        updatedAt
        user {
          id
          username
          email
          membership
          dob
          phone
          gender
          address
          nationality
          identification
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
