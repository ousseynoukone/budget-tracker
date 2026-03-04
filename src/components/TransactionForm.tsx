import { useForm } from "react-hook-form"
import { TransactionType } from "../assets/model/transaction"

export default function TransactionForm() {
  const { register, handleSubmit, formState:{errors} } = useForm()
    

    function onSubmit(data:any) {
        console.log(data)
    }

    


    return <>
                    <div className="p-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-4 mb-5">
                                <div>
                                    <label className="block text-sm text-z=white-500 mb-2">Titre</label>
                                    <input type="text" {...register("title",
                                                        {required:"Le titre est requis"}
                                    )}
                                    
                                    placeholder="Titre" className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors" />
                                    {errors.title && (
                                                <p role="alert" className="text-red-500 text-sm mt-1">
                                                {errors.title.message?.toString()}
                                                </p>
                                            )}
                                </div>
                                <div>
                                <label className="block text-sm text-white-500 mb-2">
                                    Montant
                                </label>

                                <input
                                    type="number"
                                    placeholder="montant"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                                    {...register("amount", {
                                    required: "Le montant est requis",
                                    valueAsNumber: true,
                                    validate: (value) =>
                                        !isNaN(value) || "Le montant doit être un nombre",
                                    })}
                                />

                                {errors.amount && (
                                    <p role="alert" className="text-red-500 text-sm mt-1">
                                    {errors.amount.message?.toString()}
                                    </p>
                                )}
                                </div>
                            </div>

                            <div className="mb-5">
                            <label className="block text-sm text-white-500 mb-2">
                                Date
                            </label>

                            <input
                                type="datetime-local"
                                placeholder="Date"
                                className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:border-indigo-500 transition-colors"
                                {...register("date", {
                                required: "La date est requise",
                                valueAsDate: true,
                                validate: (value) => {
                                    const date = new Date(value);      
                                    return !isNaN(date.getTime()) || "La date doit être valide";
                                },
                                })}
                            />

                            {errors.date && (
                                <p className="text-red-500 text-sm mt-1">
                                {errors.date.message?.toString()}
                                </p>
                            )}
                            </div>


                            <div className="mb-5">
                            <label className="block text-sm text-white-500 mb-2">
                                Type de transaction
                            </label>

                            <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors">
                                <select
                                {...register("transactionType", {
                                    required: "Veuillez choisir un type de transaction",
                                })}
                                className="px-3 py-3 text-sm outline-none cursor-pointer text-gray-500 bg-white border-r border-gray-300 w-full"
                                defaultValue=""
                                >
                                <option value="" disabled>
                                    Choisir un type de transaction
                                </option>
                                <option value={TransactionType.Deposit}>Revenu</option>
                                <option value={TransactionType.Withdrawal}>Dépense</option>
                                </select>
                            </div>

                            {errors.transactionType && (
                                <p role="alert" className="text-red-500 text-sm mt-1">
                                {errors.transactionType.message?.toString()}
                                </p>
                            )}
                            </div>

            

                            <button type="submit" className="w-full py-3.5 bg-linear-to-br from-indigo-500 to-purple-600 text-white rounded-lg text-sm cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)]" >
                                Ajouter une transation
                            </button>
                        </form>
                    </div>

    

           </>


}

