import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import ContactsList from '../ContactsList';
import Filter from '../Filter';
import { Section, Title, Subtitle, Container } from './PhonebookSection.styled';

function PhonebookSection({
  mainTitle,
  title,
  filter,
  contactsSet,
  onSubmit,
  onChange,
  onDeleteContact,
}) {
  return (
    <>
      <Title>{mainTitle}</Title>
      <Section>
        <ContactForm onSubmit={onSubmit} />
        <Container>
          <Subtitle>{title}</Subtitle>
          <Filter filter={filter} onChange={onChange} />
          <ContactsList
            contactsSet={contactsSet}
            filter={filter}
            onDeleteContact={onDeleteContact}
          />
        </Container>
      </Section>
    </>
  );
}

export default PhonebookSection;
