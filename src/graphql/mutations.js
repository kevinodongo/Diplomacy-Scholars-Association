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
export const createEducation = /* GraphQL */ `
  mutation CreateEducation(
    $input: CreateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    createEducation(input: $input, condition: $condition) {
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
export const updateEducation = /* GraphQL */ `
  mutation UpdateEducation(
    $input: UpdateEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    updateEducation(input: $input, condition: $condition) {
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
export const deleteEducation = /* GraphQL */ `
  mutation DeleteEducation(
    $input: DeleteEducationInput!
    $condition: ModelEducationConditionInput
  ) {
    deleteEducation(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
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
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
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
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
export const createPublication = /* GraphQL */ `
  mutation CreatePublication(
    $input: CreatePublicationInput!
    $condition: ModelPublicationConditionInput
  ) {
    createPublication(input: $input, condition: $condition) {
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
export const updatePublication = /* GraphQL */ `
  mutation UpdatePublication(
    $input: UpdatePublicationInput!
    $condition: ModelPublicationConditionInput
  ) {
    updatePublication(input: $input, condition: $condition) {
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
export const deletePublication = /* GraphQL */ `
  mutation DeletePublication(
    $input: DeletePublicationInput!
    $condition: ModelPublicationConditionInput
  ) {
    deletePublication(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
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
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
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
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createPublic = /* GraphQL */ `
  mutation CreatePublic(
    $input: CreatePublicInput!
    $condition: ModelPublicConditionInput
  ) {
    createPublic(input: $input, condition: $condition) {
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
export const updatePublic = /* GraphQL */ `
  mutation UpdatePublic(
    $input: UpdatePublicInput!
    $condition: ModelPublicConditionInput
  ) {
    updatePublic(input: $input, condition: $condition) {
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
export const deletePublic = /* GraphQL */ `
  mutation DeletePublic(
    $input: DeletePublicInput!
    $condition: ModelPublicConditionInput
  ) {
    deletePublic(input: $input, condition: $condition) {
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
