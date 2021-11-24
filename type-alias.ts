interface AuthenticatedUser {token: string};
interface UnauthenticatedUser {name: string};
interface AdminUser {level: number};

type User = AuthenticatedUser | UnauthenticatedUser | AdminUser;
type UserLinkedWithAuthentification=AuthenticatedUser | UnauthenticatedUser
type AuthentificatedAdminUser = AuthenticatedUser & AdminUser;

function find(nom:string): User  {
   return {
      name: nom
   };
}

find("Milhouse Van Houten");

