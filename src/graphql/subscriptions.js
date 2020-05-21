/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDiplomacy = /* GraphQL */ `
  subscription OnCreateDiplomacy {
    onCreateDiplomacy {
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
export const onUpdateDiplomacy = /* GraphQL */ `
  subscription OnUpdateDiplomacy {
    onUpdateDiplomacy {
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
export const onDeleteDiplomacy = /* GraphQL */ `
  subscription OnDeleteDiplomacy {
    onDeleteDiplomacy {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation {
    onCreateEducation {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation {
    onUpdateEducation {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation {
    onDeleteEducation {
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
export const onCreateSubscriber = /* GraphQL */ `
  subscription OnCreateSubscriber {
    onCreateSubscriber {
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
export const onUpdateSubscriber = /* GraphQL */ `
  subscription OnUpdateSubscriber {
    onUpdateSubscriber {
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
export const onDeleteSubscriber = /* GraphQL */ `
  subscription OnDeleteSubscriber {
    onDeleteSubscriber {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment {
    onCreateAttachment {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment {
    onUpdateAttachment {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment {
    onDeleteAttachment {
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
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
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
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
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
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
