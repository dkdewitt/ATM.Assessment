using ATM.ViewModels;
using FluentValidation;

namespace ATM.Validation
{
    public class TransferRequestValidator : AbstractValidator<TransferRequest>
    {
        public TransferRequestValidator()
        {
            RuleFor(x => x.SourceAccountId).GreaterThan(0);
            RuleFor(x => x.DestinationAccountId).GreaterThan(0);
            RuleFor(x => x.Amount).GreaterThan(0);
            RuleFor(x => x).Must(x => x.SourceAccountId != x.DestinationAccountId)
                .WithMessage("Source and destination accounts must be different.");
        }
    }
}