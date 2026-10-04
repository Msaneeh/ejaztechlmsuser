import { ArrowLeft, Medal } from "lucide-react"
import { useNavigate } from "react-router-dom"

const CertificateHeader = (Back) => {
  const navigate = useNavigate();

  const navigateBackHandler = () => {
    navigate(-1);
  }
  return (
    <>
    <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={navigateBackHandler}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Go back"
          >
            <ArrowLeft />
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xl"><Medal /></span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Certificates
            </h1>
          </div>
        </div>
        <p className="mt-1 ml-12 text-sm text-muted-text">
          Earn a certificate by completing each phase of the cohort.
        </p>
      </div>
    </>
  )
}

export default CertificateHeader;