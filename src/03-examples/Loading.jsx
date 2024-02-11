export const Loading = () => {




    return (
        <div className="d-flex justify-content-center align-items-center gap-2  py-4 text-text-center" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span className="sr-only">Loading...</span>
        </div>
    )

}