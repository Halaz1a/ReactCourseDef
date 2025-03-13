function PseudoForm() {
    const onFormSubmit = (formData) => {
        event.preventDefault();
        console.log("Formulaire envoyé");
        console.log(formData.get("pseudo"));
    }
    return (
        <form action={onFormSubmit}>
            <input type="text" name="pseudo" />
            <button type="submit">Envoyer</button>
        </form>
    )
}

export default PseudoForm