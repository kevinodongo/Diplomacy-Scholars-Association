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
          status
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
      public {
        items {
          id
          member
          title
          subject
          content
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      gallery {
        items {
          id
          attachment
          createdAt
          updatedAt
        }
        nextToken
      }
      event {
        items {
          id
          title
          content
          attachment
          createdAt
          updatedAt
        }
        nextToken
      }
      contact {
        items {
          id
          username
          email
          phone
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
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
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
      status
      diplomacy {
        id
        name
        user {
          nextToken
        }
        subscriber {
          nextToken
        }
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
          nextToken
        }
      }
      education {
        items {
          id
          institution
          memberID
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
          memberID
          attachment
          createdAt
          updatedAt
        }
        nextToken
      }
      publication {
        items {
          id
          member
          title
          content
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
          title
          subject
          content
          attachment
          createdAt
          updatedAt
        }
        nextToken
      }
      certificate {
        items {
          id
          memberID
          attachment
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
        status
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
        publication {
          nextToken
        }
        blog {
          nextToken
        }
        certificate {
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
      memberID
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
        status
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
        publication {
          nextToken
        }
        blog {
          nextToken
        }
        certificate {
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
        memberID
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
          status
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
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
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
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      username
      email
      phone
      subject
      content
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
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
          nextToken
        }
      }
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        phone
        subject
        content
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
        status
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
        publication {
          nextToken
        }
        blog {
          nextToken
        }
        certificate {
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
          status
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
        status
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
        publication {
          nextToken
        }
        blog {
          nextToken
        }
        certificate {
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
          status
        }
      }
      nextToken
    }
  }
`;
export const getPublication = /* GraphQL */ `
  query GetPublication($id: ID!) {
    getPublication(id: $id) {
      id
      member
      title
      content
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
        status
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
        publication {
          nextToken
        }
        blog {
          nextToken
        }
        certificate {
          nextToken
        }
      }
    }
  }
`;
export const listPublications = /* GraphQL */ `
  query ListPublications(
    $filter: ModelPublicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member
        title
        content
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
          status
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
      title
      subject
      content
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
        status
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
        publication {
          nextToken
        }
        blog {
          nextToken
        }
        certificate {
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
        title
        subject
        content
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
          status
        }
      }
      nextToken
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      attachment
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
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
          nextToken
        }
      }
    }
  }
`;
export const listGallerys = /* GraphQL */ `
  query ListGallerys(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGallerys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        attachment
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
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      content
      attachment
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
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
          nextToken
        }
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        attachment
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
export const getPublic = /* GraphQL */ `
  query GetPublic($id: ID!) {
    getPublic(id: $id) {
      id
      member
      title
      subject
      content
      image
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
        public {
          nextToken
        }
        gallery {
          nextToken
        }
        event {
          nextToken
        }
        contact {
          nextToken
        }
      }
    }
  }
`;
export const listPublics = /* GraphQL */ `
  query ListPublics(
    $filter: ModelPublicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member
        title
        subject
        content
        image
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
