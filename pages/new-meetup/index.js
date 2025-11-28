// our-domain.com/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react/jsx-runtime";
import Head from "next/head";

function NewMeetUpPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetUpPage;
