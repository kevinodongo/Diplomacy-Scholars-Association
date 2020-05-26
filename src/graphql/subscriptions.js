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
export const onCreateEducation = /* GraphQL */ `
  subscription OnCreateEducation {
    onCreateEducation {
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
export const onUpdateEducation = /* GraphQL */ `
  subscription OnUpdateEducation {
    onUpdateEducation {
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
export const onDeleteEducation = /* GraphQL */ `
  subscription OnDeleteEducation {
    onDeleteEducation {
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
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact {
    onCreateContact {
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
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact {
    onUpdateContact {
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
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact {
    onDeleteContact {
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
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment {
    onCreateAttachment {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment {
    onUpdateAttachment {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment {
    onDeleteAttachment {
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
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate {
    onCreateCertificate {
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
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate {
    onUpdateCertificate {
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
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate {
    onDeleteCertificate {
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
export const onCreatePublication = /* GraphQL */ `
  subscription OnCreatePublication {
    onCreatePublication {
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
export const onUpdatePublication = /* GraphQL */ `
  subscription OnUpdatePublication {
    onUpdatePublication {
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
export const onDeletePublication = /* GraphQL */ `
  subscription OnDeletePublication {
    onDeletePublication {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery {
    onCreateGallery {
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
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery {
    onUpdateGallery {
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
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery {
    onDeleteGallery {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreatePublic = /* GraphQL */ `
  subscription OnCreatePublic {
    onCreatePublic {
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
export const onUpdatePublic = /* GraphQL */ `
  subscription OnUpdatePublic {
    onUpdatePublic {
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
export const onDeletePublic = /* GraphQL */ `
  subscription OnDeletePublic {
    onDeletePublic {
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
