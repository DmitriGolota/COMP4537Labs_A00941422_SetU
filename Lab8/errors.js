
class PokemonBadRequest extends Error {
    constructor(message) {
      super(message);
      this.name = 'PokemonBadRequest';
      this.message = "Error - Bad request: check the API doc";
      this.pokeErrCode = 400;
    }
  }
  
  class PokemonNotFoundError extends Error {
    constructor(message) {
      super(message);
      this.name = 'PokemonNotFoundError';
      this.message = "Error - Pokemon was not found: check your request";
      this.pokeErrCode = 400;
    }
  }
  
  class PokemonDbError extends Error {
    constructor(message) {
      super(message);
      this.name = 'PokemonDbError';
      this.message = "Error - DB error: Contact API owners for more info.";
      this.pokeErrCode = 500;
    }
  }
  
  class PokemonDuplicateError extends PokemonBadRequest {
    constructor(message) {
      super(message);
      this.name = 'PokemonDuplicateError';
      this.message = "Error - PokemonDuplicateError: The Pokemons has already been inserted.";
      this.pokeErrCode = 400;
    }
  }
  
  class PokemonBadRequestMissingID extends PokemonBadRequest {
    constructor(message) {
      super(message);
      this.name = 'PokemonBadRequestMissingID';
      this.message = "Error - Bad request: check the API doc";
      this.pokeErrCode = 400;
    }
  }
  
  class PokemonBadRequestMissingAfter extends PokemonBadRequest {
    constructor(message) {
      super(message);
      this.name = 'PokemonBadRequestMissingAfter';
      this.message = "Error - Bad request: check the API doc";
      this.pokeErrCode = 400;
    }
  }
  
  class PokemonNoSuchRouteError extends PokemonBadRequest {
    constructor(message) {
      super(message);
      this.name = 'PokemonNoSuchRouteError';
      this.message = "Error - Improper Route: check the API doc";
      this.pokeErrCode = 404;
    }
  }

  class PokemonCastError extends PokemonBadRequest {
    constructor(message) {
      super(message);
      this.name = 'PokemonCastError';
      this.message = "Error - Must pass a pokemon id between 1 and 811";
      this.pokeErrCode = 404;
    }
  }

  class PokemonValidationError extends PokemonBadRequest {
    constructor(message) {
      super(message);
      this.name = 'PokemonValidationError';
      this.message = "Error - Check Parameters";
      this.pokeErrCode = 404;
    }
  }


  
  module.exports = {
    PokemonBadRequest,
    PokemonBadRequestMissingID,
    PokemonBadRequestMissingAfter,
    PokemonDbError,
    PokemonNotFoundError,
    PokemonDuplicateError,
    PokemonNoSuchRouteError,
    PokemonCastError,
    PokemonValidationError
  };