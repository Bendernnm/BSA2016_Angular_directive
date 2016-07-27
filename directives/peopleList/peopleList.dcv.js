(function () {
    angular.module('peopleModule')
        .directive('peopleList', peopleList);

    function peopleList() {
        return {
            templateUrl: 'directives/peopleList/peopleList.dcv.html',
            controller: PeopleList,
            controllerAs: 'people'
        }
    }

    function PeopleList($http) {
        let vm = this;

        vm.$onInit = function () {
            getPeople().then(function (data) {
                vm.allPeople = data;
            })
        };

        vm.remove = function (e, id) {
            let confirmation = confirm(`Remove ${vm.allPeople[id].firstName} ${vm.allPeople[id].lastName} from table?`);
            if (confirmation) {
                vm.allPeople.splice(id, 1);
            }
        };

        vm.edit = function (e, id) {
            vm.isEdit = true;
            vm.ediId = id;

            let element = getElement(id);
            vm.editFirstName = element.firstName;
            vm.editLastName = element.lastName;
            vm.editEMail = element.eMail;
        };
        vm.editCancel = function () {
            vm.isEdit = false;
        };
        vm.editOk = function () {
            setElement(vm.ediId, vm.editFirstName, vm.editLastName, vm.editEMail);
            vm.isEdit = false;
        };

        function getPeople() {
            return $http.get('data/people.json').then(function (response) {
                return response.data;
            })
        }

        function getElement(index) {
            return vm.allPeople[index];
        }

        function setElement(index, firstName, lastName, eMail) {
            vm.allPeople[index].firstName = firstName;
            vm.allPeople[index].lastName = lastName;
            vm.allPeople[index].eMail = eMail;
        }
    }
})();