/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDiplomacy = /* GraphQL */ `
  mutation CreateDiplomacy(
    $input: CreateDiplomacyInput!
    $condition: ModelDiplomacyConditionInput
  ) {
    createDiplomacy(input: $input, condition: $condition) {
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
export const updateDiplomacy = /* GraphQL */ `
  mutation UpdateDiplomacy(
    $input: UpdateDiplomacyInput!
    $condition: ModelDiplomacyConditionInput
  ) {
    updateDiplomacy(input: $input, condition: $condition) {
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
export const deleteDiplomacy = /* GraphQL */ `
  mutation DeleteDiplomacy(
    $input: DeleteDiplomacyInput!
    $condition: ModelDiplomacyConditionInput
  ) {
    deleteDiplomacy(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
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
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
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
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
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
export const createSubscriber = /* GraphQL */ `
  mutation CreateSubscriber(
    $input: CreateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    createSubscriber(input: $input, condition: $condition) {
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
export const updateSubscriber = /* GraphQL */ `
  mutation UpdateSubscriber(
    $input: UpdateSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    updateSubscriber(input: $input, condition: $condition) {
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
export const deleteSubscriber = /* GraphQL */ `
  mutation DeleteSubscriber(
    $input: DeleteSubscriberInput!
    $condition: ModelSubscriberConditionInput
  ) {
    deleteSubscriber(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
