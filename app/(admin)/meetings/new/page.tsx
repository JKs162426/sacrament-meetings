"use client";

import { useActionState } from "react";
import { createMeeting, type State } from "@/lib/actions";

const initialState: State = { errors: {} };

export default function NewMeetingPage() {
  const [state, formAction, isPending] = useActionState(
    createMeeting,
    initialState
  );

  return (
    <form action={formAction} className="space-y-4 p-6">
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          required
          aria-describedby="date-error"
        />
        <div id="date-error" aria-live="polite">
          {state.errors?.date && (
            <p className="text-red-600">{state.errors?.date?.[0]}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="meetingType">Meeting Type</label>
        <select
          id="meetingType"
          name="meetingType"
          required
          aria-describedby="meetingType-error"
        >
          <option value="">Select type</option>
          <option value="testimony">Testimony</option>
          <option value="regular">Regular</option>
          <option value="stake">Stake</option>
          <option value="general">General</option>
          <option value="special">Special</option>
        </select>

        <div id="meetingType-error" aria-live="polite">
          {state.errors?.meetingType && (
            <p className="text-red-600">{state.errors.meetingType}</p>
          )}
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="presiding">Presiding:</label>
          <input
            id="presiding"
            name="presiding"
            type="text"
            required
            aria-describedby="presiding-error"
          />
        </div>
        <div id="presiding-error" aria-live="polite">
          {state.errors?.presiding && (
            <p className="text-red-600">{state.errors.presiding}</p>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="conducting">Conducting:</label>
        <input
          id="conducting"
          name="conducting"
          type="text"
          required
          aria-describedby="conducting-error"
        />
      </div>
      <div id="conducting-error" aria-live="polite">
        {state.errors?.conducting && (
          <p className="text-red-600">{state.errors.conducting}</p>
        )}
      </div>
      <div>
        <label htmlFor="announcements">Announcements:</label>
        <textarea
          id="announcements"
          name="announcements"
          aria-describedby="announcements-error"
        />
      </div>
      <div id="announcements-error" aria-live="polite">
        {state.errors?.announcements && (
          <p className="text-red-600">{state.errors.announcements}</p>
        )}
      </div>
      <div>
        <label htmlFor="openingHymn">Opening Hymn:</label>
        <input
          id="openingHymn"
          name="openingHymn.number"
          type="number"
          required
          aria-describedby="openingHymn-error"
        />
        <input
          id="openingHymnTitle"
          name="openingHymn.title"
          type="text"
          required
          aria-describedby="openingHymn-error"
        />
      </div>
      <div id="openingHymn-error" aria-live="polite">
        {state.errors?.openingHymn?.number && (
          <p className="text-red-600">{state.errors.openingHymn.number}</p>
        )}
        {state.errors?.openingHymn?.title && (
          <p className="text-red-600">{state.errors.openingHymn.title}</p>
        )}
      </div>

      <div>
        <label htmlFor="openingPrayer">Opening Prayer:</label>
        <input
          id="openingPrayer"
          name="openingPrayer"
          type="text"
          required
          aria-describedby="openingPrayer-error"
        />
      </div>
      <div id="openingPrayer-error" aria-live="polite">
        {state.errors?.openingPrayer && (
          <p className="text-red-600">{state.errors.openingPrayer}</p>
        )}
      </div>
      <div>
        <label htmlFor="wardBusiness">Ward Business:</label>
        <textarea
          id="wardBusiness"
          name="wardBusiness"
          aria-describedby="wardBusiness-error"
        />
      </div>
      <div id="wardBusiness-error" aria-live="polite">
        {state.errors?.wardBusiness?.map((err, i) => (
          <p key={i} className="text-red-600">
            {err.description}
          </p>
        ))}
      </div>
      <div>
        <label htmlFor="stakeBusiness">Stake Business:</label>
        <input
          id="stakeBusiness"
          name="stakeBusiness"
          type="checkbox"
          aria-describedby="stakeBusiness-error"
        />
      </div>
      <div id="stakeBusiness-error" aria-live="polite">
        {state.errors?.stakeBusiness && (
          <p className="text-red-600">{state.errors.stakeBusiness}</p>
        )}
      </div>
      <div>
        <label htmlFor="sacramentHymn">Sacrament Hymn:</label>
        <input
          id="sacramentHymn.number"
          name="sacramentHymn.number"
          type="number"
          required
          aria-describedby="sacramentHymn-error"
        />
        <input
          id="sacramentHymn.title"
          name="sacramentHymn"
          type="text"
          required
          aria-describedby="sacramentHymn-error"
        />
      </div>
      <div id="sacramentHymn-error" aria-live="polite">
        {state.errors?.sacramentHymn?.number && (
          <p className="text-red-600">{state.errors.sacramentHymn.number}</p>
        )}
        {state.errors?.sacramentHymn?.title && (
          <p className="text-red-600">{state.errors.sacramentHymn.title}</p>
        )}
      </div>
      <div>
        <label htmlFor="speakers">Speakers:</label>
        <textarea
          id="speakers"
          name="speakers"
          aria-describedby="speakers-error"
        />
      </div>
      <div id="speakers-error" aria-live="polite">
        {state.errors?.speakers?.map((err, i) => (
          <p key={i} className="text-red-600">
            {err.name} {err.topic} {err.type}
          </p>
        ))}
      </div>
      <div>
        <label htmlFor="closingHymn">Closing Hymn:</label>
        <input
          id="closingHymn.number"
          name="closingHymn.number"
          type="number"
          required
          aria-describedby="closingHymn-error"
        />
        <input
          id="closingHymn.title"
          name="closingHymn"
          type="text"
          required
          aria-describedby="closingHymn-error"
        />
      </div>
      <div id="closingHymn-error" aria-live="polite">
        {state.errors?.closingHymn?.number && (
          <p className="text-red-600">{state.errors.closingHymn.number}</p>
        )}
        {state.errors?.closingHymn?.title && (
          <p className="text-red-600">{state.errors.closingHymn.title}</p>
        )}
      </div>
      <div>
        <label htmlFor="closingPrayer">Closing Prayer:</label>
        <input
          id="closingPrayer"
          name="closingPrayer"
          type="text"
          required
          aria-describedby="closingPrayer-error"
        />
      </div>
      <div id="closingPrayer-error" aria-live="polite">
        {state.errors?.closingPrayer && (
          <p className="text-red-600">{state.errors.closingPrayer}</p>
        )}
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Create Meeting"}
      </button>
    </form>
  );
}
