import {
  Column,
  Row,
  Img,
  Button,
  Pe,
  H2,
  Card,
  Container,
  AboutDiv,
} from "./AboutStyles";

export default function About(props) {
  return (
    <>
      <AboutDiv>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam
          tenetur possimus quidem fugit nemo neque repudiandae quibusdam
          sapiente rem.
        </p>
      </AboutDiv>

      <Container>
        <Row>
          <Column>
            <Card>
              <Img
                src="https://m.media-amazon.com/images/M/MV5BN2RkMGQ2OTktZDJmZC00Mjc0LWE3ODMtN2M3Yzc3NzJkNzY5XkEyXkFqcGdeQXRodW1ibmFpbC1pbml0aWFsaXplcg@@._V1_.jpg"
                alt="mugatu"
              />
              <H2>Mugatu</H2>
              <Pe>CEO & Founder</Pe>
              <Pe>Some text that describes me lorem ipsum ipsum lorem.</Pe>
              <Pe>mugatu@example.com</Pe>
              <p>
                <Button
                  onClick={() =>
                    alert("Nos contactaremos contigo a la brevedad")
                  }
                >
                  Contact
                </Button>
              </p>
            </Card>
          </Column>
        </Row>
      </Container>
    </>
  );
}
