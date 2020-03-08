var transactionValidator = IOTA.transactionValidator

function checkSolidity(hash) {
    return transactionValidator.checkSolidity(com.iota.iri.model.HashFactory.Transaction.create(hash))
}

API.put("checkSolidity", new Callable({ call: checkSolidity }))
